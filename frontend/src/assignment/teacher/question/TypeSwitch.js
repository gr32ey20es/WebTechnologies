import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import SingleChoice from './singleChoice.svg'
import MultipleChoice from './multipleChoice.svg'

const TypeSwitch = styled(Switch)(({ theme }) => ({
    width: 57,
    height: 30,
    padding: 6,
    '& .MuiSwitch-switchBase': {
		margin: 0,
		padding: 0,
		transform: 'translateX(6px)',
		'&.Mui-checked': {
			color: '#fff',
			transform: 'translateX(22px)',
			'& .MuiSwitch-thumb:before': {
			backgroundImage: `url(${MultipleChoice})`
			},
			'& + .MuiSwitch-track': {
			opacity: 1,
			backgroundColor: theme.palette.mode === 'dark' ? '#808080' : '#808080',
			},
		},
    },
    '& .MuiSwitch-thumb': {
		width: 28,
		height: 28,
		'&:before': {
			opacity: 0.7,
			content: "''",
			position: 'absolute',
			width: '80%',
			height: '80%',
			left: 3.2,
			top: 3,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundImage: `url(${SingleChoice})`
		},
    },
    '& .MuiSwitch-track': {
		opacity: 0.6,
		backgroundColor: theme.palette.mode === 'dark' ? '#a9a9a9' : '#a9a9a9',
		borderRadius: 20 / 2,
    },
}));

export default TypeSwitch