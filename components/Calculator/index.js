import React, {useEffect,useState,useRef} from 'react';
import * as style from './style';

const Calculator = () => {
    const [patientPerWeek,setPatientPerWeek] = useState(1);
    const [patientPerYear,setPatientPerYear] = useState(1);
    const [patientRevenuePerYear,setPatientRevenuePerYear] = useState(1);
    const [feePerPatient,setFeePerPatient] = useState(75);
    let totalRevenue = 1;

    useEffect(() => {
        totalRevenue = feePerPatient * patientPerYear;
        console.log(totalRevenue);
        setPatientRevenuePerYear(totalRevenue);
    },[patientPerYear,feePerPatient]);

    const onChangeHandler = event => {
        let patients = event.target.value;
        setPatientPerWeek(patients);
        setPatientPerYear(patients * 52)
      };

    return(
        <style.Container>
            <style.RectangleBox  boxBGColor={'#122431'}>
                <div>Fee per patient:</div>
                <div>$<input type="number" id="feePerPatient" value={feePerPatient} name="quantity" min="1" max="1000" onChange={(e) => setFeePerPatient(e.target.value)}/></div>
            </style.RectangleBox>
            <style.RectangleBox  boxBGColor={'#ffffff'} boxTextColor={'#000000'}>
                <div>Patients per week:</div>
                <span><input type="number" id="patientPerWeek" value={patientPerWeek} name="quantity" min="1" max="100" onChange={onChangeHandler}/></span>
            </style.RectangleBox>
            <style.RectangleBox  boxLinearColor={'linear-gradient(90deg, #75B9A6 0%, #3C8E78 100%)'}>
                <div>Patients per year: </div>
                <h2>{patientPerYear} </h2>
            </style.RectangleBox >
            <style.RectangleBox boxSize={6} boxLinearColor={'linear-gradient(90deg, #D3A249 0%, #F1C172 100%)'} boxTextColor={'#000000'}>
                <div>Patients revenue per year: </div>
                <h2>${patientRevenuePerYear}</h2>
            </style.RectangleBox>
        </style.Container>
    )
}
export default Calculator;



