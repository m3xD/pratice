import React from "react";
import {Box, Button, Grid, Link, Typography} from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const user = useParams();
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography color="textSecondary">Name:</Typography>
                <Typography variant="h6" gutterBottom>
                    {`${this.state.user.first_name} ${this.state.user.last_name}`}
                </Typography>
                <Typography color="textSecondary">Description:</Typography>
                <Typography variant="h6" gutterBottom>
                    {`${this.state.user.description}`}
                </Typography>
                <Typography color="textSecondary">Location:</Typography>
                <Typography variant="h6" gutterBottom>
                    {`${this.state.user.location}`}
                </Typography>
                <Typography color="textSecondary">Occupation:</Typography>
                <Typography variant="h6" gutterBottom>
                    {`${this.state.user.occupation}`}
                </Typography>
            </Grid>
            <Grid item xs={4}/>
            <Grid item xs={4}>
                <Button
                    size="large"
                    to={this.state.user && `/photos/${this.state.user._id}`}
                    component={Link}
                    variant="contained"
                    color="primary"
                >
                    See Photos
                </Button>
            </Grid>
            <Grid item xs={4}/>
        </Grid>
    )
}

export default UserDetail;
