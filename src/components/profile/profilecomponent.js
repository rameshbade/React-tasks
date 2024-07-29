import Image from "../image/image";
const ProfileComponent=()=>
{
    const obj={
        name:"ramesh",
        salary:"2500",
        job:"it"
    }
    const{name,salary,job}=obj
    return(
        <div>
            <h2>my name is:{name}</h2>
            <h2>my salary is:{salary}</h2>
            <h2>my job is:{job}</h2>
            <Image></Image>
        </div>
    )
};
export default ProfileComponent;