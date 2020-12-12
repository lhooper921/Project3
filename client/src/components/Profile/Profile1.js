const { Grid } = require("@material-ui/core");

render(){
    const{classes}=this.props;
    return (
        <div>
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h2>Personal info</h2>
                        <Grid item xs={12} sm={6}>
                            <Paper classname={classes.paper}>
                                <h1>User Info</h1> 
                                <p1>Name:{this.state.firstName} {this.state.lastName}</p1>
                                <p2>Department:{this.state.department} Position:{this.state.position}</p2>
                                <p3>Contact Info:{this.state.email}{this.state.phone}</p3>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                user bio
                            </Paper>
                        </Grid>
                    </Paper>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                             <img alt='User Image' src='https://i.imgflip.com/2ev98a.jpg' width='300' height='200'/>
                             {/* <Avatar alt='User Image' src='https://i.imgflip.com/2ev98a.jpg' className={classes.large}/> */}
                       </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </div>
    )
}