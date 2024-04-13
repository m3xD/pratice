import React from "react";
import {Typography} from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
    const user = useParams();
    return his.state.photos ? (
        <Grid justifyContent="center" container spacing={3} >
            {this.state.photos.map((photo) => (
                <Grid item xs={6} key={photo._id}>
                    <Card variant="outlined">
                        <CardHeader
                            title={linkToAuthor}
                            subheader={photo.date_time}
                            avatar={<Avatar style={{backgroundColor: '#FF7F50'}}>A</Avatar>}
                        />
                        <CardMedia
                            component="img"
                            image={`./images/${photo.file_name}`}
                            alt="Anthor Post"
                        />
                        <CardContent>
                            {photo.comments && (
                                <Typography variant="subtitle1">
                                    Comments:
                                    <Divider />
                                </Typography>
                            )}
                            {/* Only when photo has comments, then display related comments */}
                            {photo.comments &&
                                photo.comments.map((c) => (
                                    <List key={c._id}>
                                        <Typography variant="subtitle2">
                                            <Link to={`/users/${c.user._id}`}>
                                                {`${c.user.first_name} ${c.user.last_name}`}
                                            </Link>
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            color="textSecondary"
                                            gutterBottom
                                        >
                                            {c.date_time}
                                        </Typography>
                                        <Typography variant="body1">
                                            {`"${c.comment}"`}
                                        </Typography>
                                    </List>
                                ))}
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    ) : (
        <div >Loading...</div>
    );
}

export default UserPhotos;
