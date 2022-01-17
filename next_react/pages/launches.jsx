import React, { useEffect, useState } from 'react';

const Launches = ({ data }) => {
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchLaunches = async () => {
    //         const res = await fetch("https://api.spacexdata.com/v3/launches");
    //         const data = await res.json();

    //         setData(data);
    //     };
    //     fetchLaunches();
    // }, []);

    if(data == null) {
        return null;
    }
    return (
        <div>
            <ul>
                {data.map((launch, index) => (
                    <li key={index}>{launch.mission_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Launches;

export async function getStaticProps(context) {
    const res = await fetch("https://api.spacexdata.com/v3/launches");
    const data = await res.json();
    console.log("getStaticProps");
    return {
        props: {data} 
    };
  }
  

// export async function getServerSideProps(context) {
//     const res = await fetch("https://api.spacexdata.com/v3/launches");
//     const data = await res.json();
//     return {
//         props: {data} 
//     };
// }
