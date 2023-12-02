import {useRouteError} from 'react-router-dom';

export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return (
        <div className="container">
            <h1>404</h1>
            <p>Page not found</p>
        </div>
    );
}