import React, { useEffect, useState } from 'react'

const CustomApi = ({url}) => {

    const [data, setData] = useState(null);

  


    return (
        <div>
            <h1>CustomApi</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default CustomApi