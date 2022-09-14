import { useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { SideBar, Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
 

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: {sx: "auto", md: "92vh "}, borderRight: "1px solid #3d3d3d", px: 0, md: 2 }}>
        <SideBar 
          selectedCategory = { selectedCategory }
          setSelectedCategory = { setSelectedCategory }
        /> 
        <Typography className= "copyright" variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2022 JSM media
        </Typography>
      </Box>
      <Box p={2} sx={{overflow:'auto', height: '90vh', flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{color: '#F32103'}}>Videos</span>
        </Typography>
        <Videos videos={ videos }/>
      </Box>
    </Stack>
  )
}

export default Feed