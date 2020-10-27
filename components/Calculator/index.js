import React, {useEffect,useState,useRef} from 'react';
import * as style from './style';
import Link from 'next/link';

const Calculator = () => {
    const [patientPerWeek,setPatientPerWeek] = useState(1);
    const [patientPerYear,setPatientPerYear] = useState(1);
    const [patientRevenuePerYear,setPatientRevenuePerYear] = useState(1);
    const [feePerPatient,setFeePerPatient] = useState(75);
    let totalRevenue = 1;
    //"Fee per patient"​ is a dynamic input that the user can modify, the default should be $75 per patient.
    //"Patients per week"​ is a dynamic input that the user can modify.
    //"Patients per year"​ is calculated based on the number of ​"patients per week"​ multiplied by the number of weeks in a year (52)
    //"Patient revenue per year"​ is calculated by multiplying ​"Fee per patient"​ with the number from ​“Patients per year"

    useEffect(() => {
        totalRevenue = feePerPatient * patientPerYear;
        console.log(totalRevenue);
        setPatientRevenuePerYear(totalRevenue);
    },[patientPerYear,feePerPatient]);

    const onChangePatientPerWeek = event => {
        let patients = event.target.value;
        setPatientPerWeek(patients);
        setPatientPerYear(patients * 52)
      };

    return(
        <style.Container>
            <Link href="/"><a className="black">Back to Home</a></Link>
            <style.RectangleBox  boxBGColor={'#122431'}>
                <div>Fee per patient:</div>
                <div><span style={{fontSize:'2em'}}>$</span><input type="number" id="feePerPatient" value={feePerPatient} name="quantity" min="1" max="1000" onChange={(e) => setFeePerPatient(e.target.value)}/></div>
            </style.RectangleBox>
            <style.RectangleBox  boxBGColor={'#ffffff'} boxTextColor={'#000000'} boxInputTextColor={'#003A6B'}>
                <div>Patients per week:</div>
                <div className="dynamic-field"><input type="number" id="patientPerWeek" value={patientPerWeek} name="quantity" min="1" max="100" onChange={onChangePatientPerWeek}/></div>
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



