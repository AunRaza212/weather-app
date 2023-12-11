import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Box } from '@mui/material';

export const sun = 'https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png';


export const sunny = <Box color='yellow' ><WbSunnyIcon/> </Box>;
export const categories = [
    {name:'',icon: <BeachAccessOutlinedIcon />, },
    {name:'Weather',icon: <ThunderstormOutlinedIcon/>},
    {name:'Cities',icon: <ListOutlinedIcon/>},
    {name:'Map',icon: <MapOutlinedIcon/>},
    {name:'Settings',icon: <SettingsOutlinedIcon/>},
   
]
export const icons = [
    {name:'thermometer',icon:<DeviceThermostatIcon/>},
    {name:'wind',icon:<AirIcon/>},
    {name:'waterDrop',icon:<OpacityIcon/>},
    {name:'UV',icon:<Brightness7Icon/>},
    
]