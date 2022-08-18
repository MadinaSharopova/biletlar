import React from 'react'
import styled from 'styled-components'

export default function BiletModal() {
    return (
        <StyledBiletModal>
            <form>
                <h1>Add ticket</h1>
                <div className='input_category'>
                    <input type="text" placeholder='Category' />
                    <div className='icon ccc'></div>
                </div>
                <br />
                <div className='input-clear'>
                    <input type="text" placeholder='Sector *' />
                    <div className='icon icon-clear'></div>
                </div>
                <br />
                <div className='input-clear'>
                    <input type="text" placeholder='Row *' />
                    <div className='icon icon-clear'></div>
                </div>
                <br />
                <div className='input-clear'>
                    <input type="text" placeholder='Seat *' />
                    <div className='icon icon-clear'></div>
                </div>
                <br />
                <div className='input-clear'>
                    <input type="text" placeholder='Narxi *' />
                    <div className='icon icon-clear'></div>
                </div>
                <br />
                <div className='buttons'>
                    <button className='save'>Save</button>
                    <button className='cancel'>Cancel</button>
                </div>
            </form>
        </StyledBiletModal>
    )
}
const StyledBiletModal = styled.div`
    width: max-content;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50% 50%);
    padding: 24px 34px;
    background: #FFFFFF;
    box-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
     h1 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;
      margin-bottom: 59px;
    }
    input{
        width: 422px;
        height: 40px;
        background: #F6F6F6;
        border-radius: 8px;
        margin-bottom: 20px;
        border: none;
        padding-left: 12px;
    }
    .buttons{
        display: flex;
        flex-direction: row;
        gap: 44px;
    }
    .save{
        width: 189px;
        height: 40px;
        background: #4340DA;
        border-radius: 8px;
        border: none;
        color: #fff;
    }
    .cancel{
        width: 189px;
        height: 40px;
        background: #F6F6F6;
        border-radius: 8px;
        border: none;
        color: #4340DA;
    }
    .input_category {
        width: max-content;
        height: 40px;
        position: relative;
         
        div{
            position: absolute;
            right: 10px;
            top: 11px;
        } 
    }
    .input-clear {
        width: max-content;
        height: 40px;
        position: relative;
        div{
            position: absolute;
            right: 10px;
            top: 10px;
        } 
    }
  
`
