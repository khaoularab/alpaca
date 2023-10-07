const Preview = ({alpaca}) => {

    return(
        <>
        <img src = {alpaca.backgrounds} alt="background" className="background"/>
        <img src = {alpaca.neck} alt="neck" className="neck"/>
        <img src = {alpaca.nose} alt="nose" className="nose"/>
        <img src = {alpaca.mouth} alt="mouth" className="mouth"/>
        <img src = {alpaca.leg} alt="leg" className="leg"/>
        <img src = {alpaca.hair} alt="hair" className="hair"/>
        <img src = {alpaca.eyes} alt="eyes" className="eyes"/>
        <img src = {alpaca.ears} alt="ears" className="ears"/>
        <img src = {alpaca.accessories} className="accessories"/>
        </>
    )

}

export default Preview;
