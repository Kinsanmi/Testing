import '../styles/SignUp.css';
import {data} from '../faqs';
import {useState} from 'react';
import { Menu, Dropdown, DropdownMenu} from 'semantic-ui-react';


export const Cloth = () => {

  const [selected, setSelected] = useState(false);

  const toggle = (index) =>{
    if(selected === index){
      return setSelected(true)
    }


    setSelected(index)
  }

  return (
    <>
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, index)=>{
          return <>
          <div className="item">
            <div className="title" onClick={()=>{toggle(index)}}>
              <h4>{item.question}</h4>
              <span>{selected === index ? '-' : '>'}</span>
            </div>
            <div className={selected === index ? 'content show' : 'content'}>{item.answer}</div>
          </div>
      
          </>
        })}
      </div>
    </div>
    {/* Dropdown menu */}

    <Menu className='menu'>
        <Dropdown text='shopping' pointing className='link'>
        <DropdownMenu className='dp'>
          <Dropdown.Header className='push'>Categories</Dropdown.Header>
          <Dropdown.Item>Shirt</Dropdown.Item>
          <Dropdown.Item>pants</Dropdown.Item>
          <Dropdown.Item>jeans</Dropdown.Item>
          <Dropdown.Item>shorts</Dropdown.Item>
        </DropdownMenu>
        </Dropdown>
    </Menu>
    </>
  )
}
