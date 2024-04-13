import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { server } from "../../lib/fetchModelData";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar () {

    return (
        <AppBar className="topbar-appBar" position="absolute">
            <Toolbar>
                <Typography variant="h5" style={{flexGrow: 1}}>
                </Typography>
                <Typography variant="h5" style={{flexGrow: 1}}>
                    Ver: {this.state.version}
                </Typography>
                <Typography variant="h5">
                    { this.props.match.path.includes("/photos/") && "Photos of " }
                    { this.props.match.path.includes("/users/") && "Info of " }
                    { this.props.match.params.user_id && `${this.props.userName}`}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
