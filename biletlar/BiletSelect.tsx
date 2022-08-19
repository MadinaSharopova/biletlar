import React, { useState } from 'react'
import styled from 'styled-components'

export const regions = [
    {
        id: 1,
        name: 'Tashkent'
    },
    {
        id: 2,
        name: 'Navoiy'
    },
    {
        id: 3,
        name: 'Samarqand'
    },
    {
        id: 4,
        name: "Farg'ona"
    },
]

export default function BiletSelect() {

    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState('')

    function clickRegion(region:string){
       setValue(region)
       setIsOpen(false)
    }

    return (
        <StyledSelect>
            <section className='select_head'>
                <div className='select_display' onClick={() => setIsOpen((p) => !p)}>
                    <p>{value || 'Category'}</p>
                    <i className='icon ccc'></i>
                </div>
            </section>
           {isOpen ? (
             <section className='select_list'>
             <ul>
                 {regions.map((i) => (
                     <li key={i.id} onClick={() => clickRegion(i.name)}>{i.name}</li>
                 ))}
             </ul>
         </section>
           ) : null}
        </StyledSelect>
    )
}

const StyledSelect = styled.div`
position: relative;
    .select_display{
        width: 422px;
        height: 40px;
        background: #F6F6F6;
        border-radius: 8px;
        margin-bottom: 20px;
        border: none;
        display: flex;
         align-items: center;
         justify-content: space-between;
         cursor: pointer;
         padding: 10px 10px; 
         
         p{
            font-family: Roboto;
            font-size: 17px;
            font-weight: 400;
            line-height: 19px;
            color: #8992A9;
         }
    }
   .select_list{
    width: 100%;
    position: absolute;
    z-index: 2;
    background: #fff;
    box-shadow: 0px 2px 25px rgba(187, 187,187,0.35);
    border-radius: 15px;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
         gap: 20px;
         li{
            cursor: pointer;
            &:hover{
            color: royalblue;
            }
         }
    }
   }
`     
