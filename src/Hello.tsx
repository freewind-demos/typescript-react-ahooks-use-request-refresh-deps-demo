import React, {FC, useState} from 'react';
import './Hello.pcss';
import {useRequest} from "ahooks";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    const [version, setVersion] = useState(0)

    const request = useRequest(async () => {
        console.log("### version", version)
        return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(version);
            }, 1000)
        })
    }, {
        refreshDeps: [version]
    })
    return <div className={'Hello'}>
        <h1>Hello React</h1>
        <div>
            <div>
                <button onClick={() => {
                    setVersion(n => n + 1);
                }}>update
                </button>
            </div>
            <div>request: {request.data}</div>
        </div>
    </div>;
}
