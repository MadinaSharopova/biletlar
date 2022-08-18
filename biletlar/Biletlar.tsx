import React,{useState,useContext} from 'react'

//
import { BiletlarStyled} from "../biletlar/BiletlarStyled"
import SearchInput from '../../Components/searchinput/SerchInput'
import BiletModal from './BiletModal';


import { IContext, IPosit, MyContext, IDate } from "../../context/Context";

export default function Biletlar() {

    // const{userPosit,get} = useContext<IContext>(MyContext)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible((wasModalVisible) => !wasModalVisible);
      };

    return (
        <>
        <BiletlarStyled>
            <section className="user--card">
                <div className="first--div">
                    <div className="tag--div">
                        <h2>4 Tickets selected</h2>
                    </div>
                    <div className="icon--div">
                        <div className="icon icon-icon1"></div>
                        <div onClick={toggleModal} className="icon icon-icon4"></div>
                    </div>
                </div>
                <div className="second--div">
                    <SearchInput />
                </div>
                <div className="grid--div">
                    <div>
                        <div className="expand">
                            <input type="checkbox" />
                            <p>Kategoriya</p>
                            <span>
                                <div className="icon icon-expand"></div>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="expand">
                            {/* <input type="checkbox" /> */}
                            <p>Sector</p>
                            <span>
                                <div className="icon icon-expand"></div>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="expand">
                            {/* <input type="checkbox" /> */}
                            <p>Qator</p>
                            <span>
                                <div className="icon icon-expand"></div>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="expand">
                            {/* <input type="checkbox" /> */}
                            <p>O'rindiq</p>
                            <span>
                                <div className="icon icon-expand"></div>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="expand">
                            {/* <input type="checkbox" /> */}
                            <p>Band qilingan</p>
                            <span>
                                <div className="icon icon-expand"></div>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="expand">
                            {/* <input type="checkbox" /> */}
                            <p>Mijoz ismi</p>
                            <span>
                                <div className="icon icon-expand"></div>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="expand">
                            {/* <input type="checkbox" /> */}
                            <p>Mijoz raqami</p>
                            <span>
                                <div className="icon icon-expand"></div>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
         
        </BiletlarStyled>
         <BiletModal/>
         </>
    )
}
