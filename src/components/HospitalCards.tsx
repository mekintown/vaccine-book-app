import Card from "./Card"

const HospitalCards = () => {
    return (
        <div className="flex items-stretch flex-col gap-4 m-4">
            <h1 className='text-black text-center text-3xl m-8'>Collaborate with...</h1>
            <Card imgSrc="/img/chulalongkornHospital.png" txt="Chulalongkorn Hospital"/>
            <Card imgSrc="/img/rajavithiHospital.png" txt="Rajavithi Hospital"/>
            <Card imgSrc="/img/thammasatUniversityHospital.png" txt="Thammasat University Hospital"/>
        </div>    
    )
}

export default HospitalCards