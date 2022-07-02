import { differenceInMonths, differenceInYears } from "date-fns";
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
  Legend
} from 'chart.js';
import { useSelector } from "react-redux";
import { getDocs, collection, getDoc, doc } from "firebase/firestore";
import { useState, useEffect, Children } from "react";
import { db } from "../firebase"

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
  const id = useSelector((state) => state.id)
  const [child, setChild] = useState({})
  const [record, setRecord] = useState([])

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
      
        default:
          break;
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
      
      default:
        break;
    }
  }

  const templateDataset = (type, datasets) => {
    
    const { neg2, neg1, normal, plus1, plus2 } = datasets
    
    return [
      {
        label: `SD -2`,
        data: neg2,
        fill: false,
        pointRadius: 0,
        borderColor: 'rgb(237, 28, 36)',
        tension: 0.1
      },
      {
        label: `SD -1`,
        data: neg1,
        fill: false,
        pointRadius: 0,
        borderColor: 'rgb(250, 253, 15)',
        tension: 0.1
      },
      {
        label: `Normal`,
        data: normal,
        fill: false,
        pointRadius: 0,
        borderColor: 'rgb(50,205,50)',
        tension: 0.1
      },
      {
        label: `SD +1`,
        data: plus1,
        fill: false,
        pointRadius: 0,
        borderColor: 'rgb(250, 253, 15)',
        tension: 0.1
      },
      {
        label: `SD +2`,
        data: plus2,
        fill: false,
        pointRadius: 0,
        borderColor: 'rgb(237, 28, 36)',
        tension: 0.1
      }
    ]
  }

  const getDataTinggi = (data) => {
    return {
      labels: [1,2,3,4,5,6,7,8,9,10,11,12,13],
      datasets: [
        {
          label: `Record`,
          data: data.map(it => it.height),
          fill: false,
          pointRadius: 3,
          borderColor: 'rgb(0, 0, 255)',
          tension: 0.5
        },
        ...getData("tinggi", true),
      ]
    }
  };

  const getDataBerat = (data) => {
    return {
      labels: [1,2,3,4,5,6,7,8,9,10,11,12,13],
      datasets: [
        {
          label: `Record`,
          data: data.map(it => it.weight),
          fill: false,
          pointRadius: 3,
          borderColor: 'rgb(0, 0, 255)',
          tension: 0.5
        },
        ...getData("berat", true)
      ]
    }
  };

  const getDataKepala = (data) => {
    return {
      labels: [1,2,3,4,5,6,7,8,9,10,11,12,13],
      datasets: [
        {
          label: `Record`,
          data: data.map(it => it.head),
          fill: false,
          pointRadius: 3,
          borderColor: 'rgb(0, 0, 255)',
          tension: 0.5
        },
        ...getData("kepala", true)
      ]
    }
  };

  const getDate = (date) => {
    if (date != null) {
      return `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`
    }
  }

  const getAge = (date) => {
    const now = new Date()
    const month = differenceInMonths(now, date)
    const year = differenceInYears(now, date)
    return `${year} tahun ${month} bulan`
  }

  useEffect(() => {
    const fetchChildData = async () => {
      const docSnap = await getDoc(doc(db, "children", id));
      setChild({
        id: docSnap.id,
        name: docSnap.data().name,
        gender: docSnap.data().gender,
        birthDate: docSnap.data().birthDate.toDate()
      })
      console.log(docSnap)
    }
    const fetchRecordData = async () => {
        const acc = []
        const querySnapshot = await getDocs(collection(db, `children/${id}/histories`));
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            acc.push({
                id: doc.id,
                head: parseFloat(data.head),
                height: parseFloat(data.height),
                weight: parseFloat(data.weight)
            })
        });
        setRecord(acc)
    }
    fetchRecordData()
    fetchChildData()
  }, [])

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <h1>Data Anak</h1>
        <Card sx={{width: '100%', padding: 3}}>
          <p>Nama</p>
          <p>{child?.name}</p>
          <p>Tanggal Lahir</p>
          <p>{child && getDate(child?.birthDate)}</p>
          <p>Usia</p>
          <p>{child && getAge(child?.birthDate)}</p>
          <p>Jenis Kelamin</p>
          <p>{child?.gender}</p>
        </Card>
        <h2>Record</h2>
        <Box display="flex" flexDirection="row" flexWrap="wrap" sx={{width: '85vw'}}>
          <Card sx={{width: '30%', height: 300, marginX: 0.3, padding: '16px'}}>
            <Typography variant="subtitle1" component="h2">
              Tinggi
            </Typography>
            { record && <Line data={getDataTinggi(record)} options={{ maintainAspectRatio: false }} />}
          </Card>
          <Card sx={{width: '30%', height: 300, marginX: 0.3, padding: '16px'}}>
            <Typography variant="subtitle1" component="h2">
              Berat
            </Typography>
            { record && <Line data={getDataBerat(record)} options={{ maintainAspectRatio: false }} />}
          </Card>
          <Card sx={{width: '30%', height: 300, marginX: 0.3, padding: '16px'}}>
            <Typography variant="subtitle1" component="h2">
              Lingkar Kepala
            </Typography>
            { record && <Line data={getDataKepala(record)} options={{ maintainAspectRatio: false }} />}
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