import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function Menu(props) {
    const { selectedMenu, menu, handleMenuChange } = props
    return (
        <RadioGroup
            row
            onChange={handleMenuChange}
            value={selectedMenu}
            name="radio-buttons-group"
        >   {menu.map((item) => (
            <FormControlLabel key={item.key} value={item.key} control={<Radio />} label={item.name} />
        ))} </RadioGroup>
    )
}
export default Menu