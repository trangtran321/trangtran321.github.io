import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error : unknown = useRouteError();
    console.error(error);

    return(
        <div id="error-page">
            <h1> Sorry, and unexpected error has occured. </h1>
            <p>
                <i> {(error as {statusText? :string})?.statusText || (error as Error)?.message} </i>
            </p>
        </div>
    )
}
