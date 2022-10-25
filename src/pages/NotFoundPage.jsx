import React from "react";
import {Link} from 'react-router-dom'

function NotFoundPage() {

    return(
        <Link className="pageNotFound" to="/">
            <img src="https://techcrunch.com/wp-content/uploads/2016/05/bitly.gif?w=700&crop=1" alt="error" />
        </Link>
    )
}

export default NotFoundPage;