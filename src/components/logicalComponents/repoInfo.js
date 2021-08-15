import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import {
  FetchDataHasError,
  FetchDataIsLoading,
  FetchDataSuccess,
} from "../../store/actions/actions";
import { CounterContext, DataContext } from "../../store/store";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const repos = [
  "eslint/eslint",
  "oakwood/front-end-questions",
  "babel/babel",
  "webpack/webpack",
  "storybooks/storybook",
  "facebook/react",
  "reactjs/redux",
  "expressjs/express",
];

const useStyles = makeStyles(() => ({
  caption: {
    display: "flex",
    justifyContent: "center",
  },
}));

function RepoInfo() {
  const { data, dataDispatch } = useContext(DataContext);
  const { count } = useContext(CounterContext);

  useEffect(() => {
    const repoToFetch = `https://api.github.com/repos/${repos[count]}`;

    //Sets loading state to true before fetching content
    dataDispatch(FetchDataIsLoading());
    axios
      .get(repoToFetch)
      .then((res) => {
        dataDispatch(FetchDataSuccess(res.data));
      })
      .catch((error) => {
        dataDispatch(FetchDataHasError(error));
      });
  }, [count, dataDispatch]);

  const classes = useStyles();
  if (data.isLoading) {
    return <CircularProgress />;
  }
  if (data.error) {
    return <Typography color="error">{data.error}</Typography>;
  }
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {data.repoData?.full_name}
      </Typography>
      <Typography paragraph variant="body1" gutterBottom>
        {data.repoData?.description}
      </Typography>
      <div className={classes.caption}>
        <StarBorderIcon fontSize="inherit" />
        <Typography variant="caption">
          {data.repoData?.stargazers_count}
        </Typography>
      </div>
    </div>
  );
}

export default RepoInfo;
