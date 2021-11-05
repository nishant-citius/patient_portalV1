import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function DoctorsCard() {
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          <h4
            style={{ color: "#fff" }}
            className=" text-center fw-bold p-2 bg-secondary"
          >
            Our Speciality Services
          </h4>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://mgmmcha.org/images/logos/Cardiologyfinal.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cardiology
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    The field includes medical diagnosis and treatment of
                    congenital heart defects, coronary artery disease, heart
                    failure, valvular heart disease and electrophysiology.
                    Physicians who specialize in this field of medicine are
                    called cardiologists, a specialty of internal medicine.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://www.symbiosis.ae/images/doctors/Dr_Ateeque1.png" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Dr. Padma Pathra(MRCP UK,CCT Cardiology)
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      15 years of Experience
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="data:image/jpeg;base64,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"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Oncology
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    The goal of surgery is to remove the cancer or as much of
                    the cancer as possible. Chemotherapy. Chemotherapy uses
                    drugs to kill cancer cells. Radiation therapy, Bone marrow
                    transplant, Immunotherapy.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dbW3zOJTLN5ZuOqXYcH-yXLxxD3Clrj6W4rdJzTWzG7k0vLjzX49CWVHO5LO025SW80&usqp=CAU" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Dr. Ananya Mandal(MD,DM)
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      15 years of experience
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://vishesh.jupiterhospital.com/uploadedfiles/gallery/1608123831neurology.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Neurology
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Neurology is a branch of medicine dealing with disorders of
                    the nervous system. It deals with the diagnosis and
                    treatment of all categories of conditions and disease
                    involving the central and peripheral nervous systems,
                    including their coverings, blood vessels, and all effector
                    tissue, such as muscle
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dbW3zOJTLN5ZuOqXYcH-yXLxxD3Clrj6W4rdJzTWzG7k0vLjzX49CWVHO5LO025SW80&usqp=CAU" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Dr. Sudhir Koganti(DM,DNB)
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      10 years of experience
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="data:image/jpeg;base64,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"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Pulmonology
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Pulmonology or pneumology is a medical specialty that deals
                    with diseases involving the respiratory tract. It is also
                    known as respirology, respiratory medicine, or chest
                    medicine in some countries and areas. Pulmonology is
                    considered a branch of internal medicine, and is related to
                    intensive care medicine.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dbW3zOJTLN5ZuOqXYcH-yXLxxD3Clrj6W4rdJzTWzG7k0vLjzX49CWVHO5LO025SW80&usqp=CAU" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Dr. ASHLEY WILLSON(MD, DNB,DM(Pulmonary-Gold Medal))
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      Experience 18 years
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRaMEt-ejHkogs1GqhVmLyWIyj1tTmasSXdg&usqp=CAU"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nephrology
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Nephrology is a specialty of adult internal medicine and
                    pediatric medicine that concerns the study of the kidneys,
                    specifically normal kidney function and kidney disease, the
                    preservation of kidney health, from diet and medication to
                    renal replacement therapy.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiESl_LAPLJMtspmHa8lYoUlrmj3Ofc8jM6gMIE5DzfWzZ4695QXwArRlIXKVWXaJcNY&usqp=CAU" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      N.R.K Rao( M.D. or D.O. (US), M.B.B.S. (UK), DM.B.)
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      22 Years of Experience
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="data:image/jpeg;base64,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"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    pediatric ophthalmology
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Ophthalmology is a branch of medicine and surgery that deals
                    with the diagnosis and treatment of disorders of the eye. An
                    ophthalmologist is a physician who specializes in
                    ophthalmology. The credentials include a degree in medicine,
                    followed by additional four to five years of residency
                    training in ophthalmology.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Dr.Karen dawson(MS,M.ch(Pediotric Surgery in USA))
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      Experience 22 years
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default DoctorsCard;
