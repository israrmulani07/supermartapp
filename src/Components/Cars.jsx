import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid, Card, CardContent } from '@mui/material'

export const Cars = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    const result = await axios.get("http://localhost:5050/cars")
    setData(result.data)


  }

  useEffect(() => {
    getData();
  }, [])
  return (

    <React.Fragment>
      <h1>Cars Info</h1>
      <Grid container spacing={3}>

        {
          data.map((item =>
            <Grid item xs={3}>
              <Card sx={{ bgcolor: item.Color, border: "solid", borderRadius: 3 }}>
                <CardContent>
                  {item.Brand}-{item.Model}
                </CardContent>
              </Card>
            </Grid>
          ))
        }

      </Grid>
    </React.Fragment>
  )
}

export default Cars