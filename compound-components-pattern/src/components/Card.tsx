import type { ReactNode } from "react";
import './Card.scss';

const Card = ({children}: {children: ReactNode}) => {
    return <div className="card">{children}</div>;
}

const CardHeader = ({message}: {message: string}) => {
    return (
        <div className="card-header">
            <h2>{message}</h2>
        </div>
    )
}

const CardBody = (props: any) => {
    return (
        <div className="card-body">
            {props.children}
        </div>
    )
}

const CardFooter = (props: any) => {
    return (
        <div className="card-footer">
            {props.children}
        </div>
    )
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;