import { Container, Card, Box, Typography } from "@mui/material"
import { Line } from "react-chartjs-2";
import Header from "../Components/Header"
import { 
  HEIGHT_BOYS_SD2NEG, 
  HEIGHT_BOYS_SD1NEG, 
  HEIGHT_BOYS_SD0, 
  HEIGHT_BOYS_SD1, 
  HEIGHT_BOYS_SD2, 
  WEIGHT_BOYS_SD2NEG,
  WEIGHT_BOYS_SD1NEG, 
  WEIGHT_BOYS_SD0, 
  WEIGHT_BOYS_SD1, 
  WEIGHT_BOYS_SD2, 
  HEAD_BOYS_SD2NEG, 
  HEAD_BOYS_SD1NEG,
  HEAD_BOYS_SD0, 
  HEAD_BOYS_SD1, 
  HEAD_BOYS_SD2, 
  HEIGHT_GIRLS_SD2NEG, 
  HEIGHT_GIRLS_SD1NEG, 
  HEIGHT_GIRLS_SD0, 
  HEIGHT_GIRLS_SD1, 
  HEIGHT_GIRLS_SD2, 
  WEIGHT_GIRLS_SD2NEG, 
  WEIGHT_GIRLS_SD1NEG, 
  WEIGHT_GIRLS_SD0, 
  WEIGHT_GIRLS_SD1, 
  WEIGHT_GIRLS_SD2, 
  HEAD_GIRLS_SD2NEG, 
  HEAD_GIRLS_SD1NEG, 
  HEAD_GIRLS_SD0, 
  HEAD_GIRLS_SD1, 
  HEAD_GIRLS_SD2 
} from "../utils/constants" 

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataset,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChildDetailPage = () => {
  const getData = (type, isMale) => {
    if (isMale) {
        return getDataMale(type)
    } else {
      return getDataFemale(type)
    }
  }

  const getDataMale = (type) => {
    switch (type) {
      case "tinggi":
        return templateDataset(type, {
          neg2: HEIGHT_BOYS_SD2NEG,
          neg1: HEIGHT_BOYS_SD1NEG,
          normal: HEIGHT_BOYS_SD0,
          plus1: HEIGHT_BOYS_SD1,
          plus2: HEIGHT_BOYS_SD2
        })
      
      case "berat":
        return templateDataset(type, {
          neg2: WEIGHT_BOYS_SD2NEG,
          neg1: WEIGHT_BOYS_SD1NEG,
          normal: WEIGHT_BOYS_SD0,
          plus1: WEIGHT_BOYS_SD1,
          plus2: WEIGHT_BOYS_SD2
        })
      
      case "kepala":
        return templateDataset(type, {
          neg2: HEAD_BOYS_SD2NEG,
          neg1: HEAD_BOYS_SD1NEG,
          normal: HEAD_BOYS_SD0,
          plus1: HEAD_BOYS_SD1,
          plus2: HEAD_BOYS_SD2
        })
    }
  }

  const getDataFemale = (type) => {
    switch (type) {
      case "tinggi":
        return templateDataset(type, {
          neg2: HEIGHT_GIRLS_SD2NEG,
          neg1: HEIGHT_GIRLS_SD1NEG,
          normal: HEIGHT_GIRLS_SD0,
          plus1: HEIGHT_GIRLS_SD1,
          plus2: HEIGHT_GIRLS_SD2
        })
      
      case "berat":
        return templateDataset(type, {
          neg2: WEIGHT_GIRLS_SD2NEG,
          neg1: WEIGHT_GIRLS_SD1NEG,
          normal: WEIGHT_GIRLS_SD0,
          plus1: WEIGHT_GIRLS_SD1,
          plus2: WEIGHT_GIRLS_SD2
        })
      
      case "kepala":
        return templateDataset(type, {
          neg2: HEAD_GIRLS_SD2NEG,
          neg1: HEAD_GIRLS_SD1NEG,
          normal: HEAD_GIRLS_SD0,
          plus1: HEAD_GIRLS_SD1,
          plus2: HEAD_GIRLS_SD2
        })
    }
  }

  const templateDataset = (type, datasets) => {
    
    const { neg2, neg1, normal, plus1, plus2 } = datasets
    
    return [
      {
        label: `${type} SD -2`,
        data: neg2,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: `${type} SD -1`,
        data: neg1,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: `${type} Normal`,
        data: normal,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: `${type} SD +1`,
        data: plus1,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: `${type} SD +2`,
        data: plus2,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }

  const dummyDataTinggi = {
    labels: [1,2,3,4,5,6, 7],
    datasets: getData("tinggi", true)
  };

  const dummyDataBerat = {
    labels: [1,2,3,4,5,6, 7],
    datasets: getData("berat", true)
  };

  const dummyDataKepala = {
    labels: [1,2,3,4,5,6, 7],
    datasets: getData("kepala", true)
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <h1>Data Anak</h1>
        <Card sx={{width: '100%', padding: 3}}>
          <p>Nama</p>
          <p>Tanggal Lahir</p>
          <p>Usia</p>
          <p>Jenis Kelamin</p>
        </Card>
        <h2>Record</h2>
        <Box display="flex" flexDirection="row" flexWrap="wrap" sx={{width: '85vw'}}>
          <Card sx={{width: '30%', height: 400, marginX: 0.3, padding: '16px'}}>
            <Typography variant="subtitle1" component="h2">
              Tinggi
            </Typography>
            <Line data={dummyDataTinggi} />
          </Card>
          <Card sx={{width: '30%', height: 400, marginX: 0.3, padding: '16px'}}>
            <Typography variant="subtitle1" component="h2">
              Berat
            </Typography>
            <Line data={dummyDataBerat} />
          </Card>
          <Card sx={{width: '30%', height: 400, marginX: 0.3, padding: '16px'}}>
            <Typography variant="subtitle1" component="h2">
              Lingkar Kepala
            </Typography>
            <Line data={dummyDataKepala} />
          </Card>
        </Box>    
        <Card>
          <h3>Keterangan sesuai chart</h3>
          <p>Solusi</p>
        </Card>
      </Container>
    </>
  )
}

export default ChildDetailPage