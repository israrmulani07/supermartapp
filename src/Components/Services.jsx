import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Button, TextField, Card, CardContent } from "@mui/material";
import { ServicesItem } from "./ServiceItem";

export const Services = () => {
    const [data, setData] = useState([]);
    const [oridata, setOridata] = useState([]);
    const [txt, setTxt] = useState("");


    const getData = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setData(result.data);
        setOridata(result.data);
    };

    const handleStatus = (isCompleted) => {
        const filtered = oridata.filter((item) => item.completed === isCompleted)
        setData(filtered);
    }

    const handleDelete = (index) => {
        const filtered = oridata.filter((item, ind) => index !== ind)
        setData(filtered)
        setOridata(filtered)

    }

    const handleSave = (index, val) => {
        const newdata = data;
        newdata[index].title = val;
        setData(newdata);

    }

    useEffect(() => {
        const filtered = oridata.filter((item) => item.title.toUpperCase().includes(txt.toUpperCase()))
        setData(filtered);
    }, [txt])


    useEffect(() => {
        getData();

    }, []);


    return (
        <React.Fragment>

            <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={6}>
                    <TextField variant="outlined" label="Search" onChange={(e) => setTxt(e.target.value)} fullWidth sx={{ bgcolor: "white" }} />
                </Grid>

                <Grid item xs={2}>
                    <Card>
                        <CardContent>
                            {oridata.length}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={2}><Button variant="contained" color="warning" fullWidth sx={{ height: 55 }} onClick={() => handleStatus(false)} >In Progress</Button></Grid>
                <Grid item xs={2}><Button variant="contained" color="success" fullWidth sx={{ height: 55 }} onClick={() => handleStatus(true)} >Completed</Button></Grid>

                {
                    data.map((item, index) => (
                        <ServicesItem item={item} index={index} handleDelete={handleDelete} handleSave={handleSave} />
                    ))}



            </Grid>

        </React.Fragment>
    )
}

/*
step1:
added index to map 
data.map((item,index)=>(

))

step2:
pass the pros index in serviceitem
<serviceitem item={item} index={index}/>

step3: 
at service item recive index
export serviceitem=({item,index})=>{

}
step4:
Button click
<Button onclick={()=>handleDelete(index)}>Delete</>

step5:impliment handleDelete at parennt compontent  

const handleDelete(index)=>{
const filtered=data.filter((item,ind)=>
ind!==index
setData(filtered)
setOridata(filtered)//If we want to delete from original data
)}

step6:
add handleDelete to  prop  in (data.map)

step7:
recive handleDelete to childcomponent 
*/