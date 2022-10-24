import React from "react";

const Response = ({children}) => {

    return (
        <>
            <p className="res_label">Response</p>
            <code className="res_text">
                <pre>
                    {children}
                </pre>
            </code>
        </>
    )
}

export default Response