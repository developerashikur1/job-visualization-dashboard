import React, { useEffect, useState } from 'react';
import './Airlines.scss';
import {Button, Grid, Box, MenuItem} from '@mui/material';


const Airlines = () => {

    // all states
    const [airsData, setAirsData] = useState([]);
    const [filterAirsData, setFilterAirsData] = useState([]);
    const [uniqEndYear, setUniqEndYear] = useState([]);
    const [uniqTopic, setUniqTopic] = useState([]);
    const [uniqSector, setUniqSector] = useState([]);
    const [uniqRegion, setUniqRegion] = useState([]);
    const [uniqPestle, setUniqPestle] = useState([]);
    const [uniqSource, setUniqSource] = useState([]);
    const [uniqCountry, setUniqCountry] = useState([]);
    const [active, setActive] = useState('');

    // checkboxValue
    useEffect(()=>{
       const uri = 'https://shrouded-headland-81128.herokuapp.com/visualizationData';
       fetch(uri)
       .then(res => res.json())
       .then(data => {
           setAirsData(data);
            const temp1 = data;

            // Get All Filtering Data
            setUniqEndYear([...new Set(temp1.map(item=> item?.end_year))])
            setUniqTopic([...new Set(temp1.map(item=> item?.topic))])
            setUniqSector([...new Set(temp1.map(item=> item?.sector))])
            setUniqRegion([...new Set(temp1.map(item=> item?.region))])
            setUniqPestle([...new Set(temp1.map(item=> item?.pestle))])
            setUniqSource([...new Set(temp1.map(item=> item?.source))])
            setUniqCountry([...new Set(temp1.map(item=> item?.country))])

        })
    },[]);
      
    const handleFilterWithState = (one, get) =>{
        switch (get) {
            case 'end_year':
            const filterEndYear = airsData.filter(dataOne=> dataOne.end_year === one);
            setFilterAirsData(filterEndYear);
            break;
            case 'topic':
            const filterTopic = airsData.filter(dataOne=> dataOne.topic === one);
            setFilterAirsData(filterTopic);
            
            break;
            case 'sector':
            const filterSector = airsData.filter(dataOne=> dataOne.sector === one);
            setFilterAirsData(filterSector);
            
            break;
            case 'region':
            const filterRegion = airsData.filter(dataOne=> dataOne.region === one);
            setFilterAirsData(filterRegion);
            
            break;
            case 'pestle':
            const filterPestle = airsData.filter(dataOne=> dataOne.pestle === one);
            setFilterAirsData(filterPestle);
            
            break;
            case 'source':
            const filterSource = airsData.filter(dataOne=> dataOne.source === one);
            setFilterAirsData(filterSource);
            
            break;
            case 'country':
            const filterCountry = airsData.filter(dataOne=> dataOne.country === one);
            setFilterAirsData(filterCountry);
            
            break;
    
        default:
            break;
        }
    }
    

    return (
        <div className='mainContainer'>
            <h2 className='airlines'>Filter Methods</h2>   

            {/* filtering section */}
            <div className='checkboxValue'>

            {/* different section for filtering */}
                <Grid container spacing={0}>
                    <Grid style={{position:'relative'}} item xs={4} md={1}>
                        <Button onMouseOver={()=>setActive(active === 'end_year' ? '' : 'end_year')} variant="contained">
                            End Year
                        </Button>
                        <Box style={{ display:`${active === 'end_year' ? 'block' : 'none'}`, maxHeight:'240px',  zIndex:'5',float: 'left',position:'absolute', overflow:'hidden', backgroundColor:'white',overflowY: 'scroll',  border:'1px solid red',  maxWidth:'320px', minWidth:'110px'}}>
                            {uniqEndYear.map((one, index)=><MenuItem onClick={() => (`${handleFilterWithState(one, 'end_year')} ${setActive(!active)}`)} key={`new+${index}`}>{one}</MenuItem>)}
                        </Box>
                    </Grid>

                    {/* different section for filtering */}
                    <Grid style={{position:'relative'}} item xs={4} md={1}>
                        <Button onMouseOver={()=>setActive(active === 'topic' ? '' : 'topic')} variant="contained">
                           Topic
                        </Button>
                        <Box style={{ display:`${active === 'topic' ? 'block' : 'none'}`, maxHeight:'240px',  zIndex:'5',float: 'left',position:'absolute', overflow:'hidden', backgroundColor:'white',overflowY: 'scroll',  border:'1px solid red',  maxWidth:'320px', minWidth:'110px'}}>
                            {uniqTopic.map((one, index)=><MenuItem onClick={() => (`${handleFilterWithState(one, 'topic')} ${setActive(!active)}`)} key={`new+${index}`}>{one}</MenuItem>)}
                        </Box>
                    </Grid>

                    {/* different section for filtering */}
                    <Grid style={{position:'relative'}} item xs={4} md={1}>
                        <Button onMouseOver={()=>setActive(active === 'sector' ? '' : 'sector')} variant="contained">
                            Sector
                        </Button>
                        <Box style={{ display:`${active === 'sector' ? 'block' : 'none'}`, maxHeight:'240px',  zIndex:'5',float: 'left',position:'absolute', overflow:'hidden', backgroundColor:'white',overflowY: 'scroll',  border:'1px solid red',  maxWidth:'320px', minWidth:'110px'}}>
                            {uniqSector.map((one, index)=><MenuItem onClick={() => (`${handleFilterWithState(one, 'sector')} ${setActive(!active)}`)} key={`new+${index}`}>{one}</MenuItem>)}
                        </Box>
                    </Grid>

                    {/* different section for filtering */}
                    <Grid style={{position:'relative'}} item xs={4} md={1}>
                        <Button onMouseOver={()=>setActive(active === 'region' ? '' : 'region')} variant="contained">
                            Region
                        </Button>
                        <Box style={{ display:`${active === 'region' ? 'block' : 'none'}`, maxHeight:'240px',  zIndex:'5',float: 'left',position:'absolute', overflow:'hidden', backgroundColor:'white',overflowY: 'scroll',  border:'1px solid red',  maxWidth:'320px', minWidth:'110px'}}>
                            {uniqRegion.map((one, index)=><MenuItem onClick={() => (`${handleFilterWithState(one, 'region')} ${setActive(!active)}`)} key={`new+${index}`}>{one}</MenuItem>)}
                        </Box>
                    </Grid>

                    {/* different section for filtering */}
                    <Grid style={{position:'relative'}} item xs={4} md={1}>
                        <Button onMouseOver={()=>setActive(active === 'pestle' ? '' : 'pestle')} variant="contained">
                        Pestle
                        </Button>
                        <Box style={{ display:`${active === 'pestle' ? 'block' : 'none'}`, maxHeight:'240px',  zIndex:'5',float: 'left',position:'absolute', overflow:'hidden', backgroundColor:'white',overflowY: 'scroll',  border:'1px solid red',  maxWidth:'320px', minWidth:'110px'}}>
                            {uniqPestle.map((one, index)=><MenuItem onClick={() => (`${handleFilterWithState(one, 'pestle')} ${setActive(!active)}`)} key={`new+${index}`}>{one}</MenuItem>)}
                        </Box>
                    </Grid>

                    {/* different section for filtering */}
                    <Grid style={{position:'relative'}} item xs={4} md={1}>
                        <Button onMouseOver={()=>setActive(active === 'source' ? '' : 'source')} variant="contained">
                        Source
                        </Button>
                        <Box style={{ display:`${active === 'source' ? 'block' : 'none'}`, maxHeight:'240px',  zIndex:'5',float: 'left',position:'absolute', overflow:'hidden', backgroundColor:'white',overflowY: 'scroll',  border:'1px solid red',  maxWidth:'320px', minWidth:'110px'}}>
                            {uniqSource.map((one, index)=><MenuItem onClick={() => (`${handleFilterWithState(one, 'source')} ${setActive(!active)}`)} key={`new+${index}`}>{one}</MenuItem>)}
                        </Box>
                    </Grid>

                    {/* different section for filtering */}
                    <Grid style={{position:'relative'}} item xs={4} md={1}>
                        <Button onMouseOver={()=>setActive(active === 'country' ? '' : 'country')} variant="contained">
                        Country
                        </Button>
                        <Box style={{ display:`${active === 'country' ? 'block' : 'none'}`, maxHeight:'240px',  zIndex:'5',float: 'left',position:'absolute', overflow:'hidden', backgroundColor:'white',overflowY: 'scroll',  border:'1px solid red',  maxWidth:'320px', minWidth:'110px'}}>
                            {uniqCountry.map((one, index)=><MenuItem onClick={() => (`${handleFilterWithState(one, 'country')} ${setActive(!active)}`)} key={`new+${index}`}>{one}</MenuItem>)}
                        </Box>
                    </Grid>
                </Grid>
            </div>

            {/* card section */}
                <p className='airsName'>{ filterAirsData.length >= 1 ? (filterAirsData.length <= 30 ? `Found ${filterAirsData.length} out of ${filterAirsData.length}` : `Found 30 out of ${filterAirsData.length}`) : `Found 30 out of ${airsData.length}`}</p>
            <div className='gridContainer'>
                {(filterAirsData.length === 0 ? airsData : filterAirsData).slice(0, 36).map((air, index)=>
                <div key={`new+${index}`} className='gridItem'>
                    <div className='itemDetails'>
                        <p className='airsName'>country: {air?.country} </p>
                        <p className='airsName'>Region: {air?.region} </p>
                        <p className='airsUrl'>Topic: {air?.topic} </p>
                        <h3 className='airsUrl'> Intensity: {air?.intensity} </h3>
                        <p className='airsUrl'>Likelihood: {air?.likelihood} </p>
                        <p className='airsUrl'>Relevance: {air?.relevance} </p>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default Airlines;