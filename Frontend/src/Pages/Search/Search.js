/** @format */

import React, { useState, useEffect } from "react";
import classes from "./Search.module.css";
import Page from "../../HOC/Page";
import { useLazyQuery } from "@apollo/client";
import { Queries } from "./apollo/Queries";
import ProfileCard from "./Components/ProfileCard";
import InfiniteScroll from "react-infinite-scroll-component";

const Search = () => {
  const [select, setselect] = useState("People");
  const [search, setSearch] = useState("");
  const [pageNo, setpageNo] = useState(0);
  const [hasMore, sethasMore] = useState(true);
  const [result, setresult] = useState([]);

  const [searchUsers, { loading, error, data, fetchMore }] = useLazyQuery(
    Queries,
    {
      variables: {
        pageNo: pageNo,
      },
    }
  );

  useEffect(() => {
    if (data) {
      const { data: userData, message } = data?.searchUsers;
      console.log("in", data);
      if (data.length <= 10) {
        sethasMore(false);
      }
      if (message === "No Data") {
        console.log("Firing");
        sethasMore(false);
        setresult(userData);
        return;
      }
      setresult(userData);
    }
  }, [data]);

  const changeSearchCriteria = (e) => {
    setselect(e.target.value);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const fetchMoredata = async () => {
    console.log("more");
    var page = pageNo + 1;
    await fetchMore({
      variables: { pageNo: page },
      updateQuery: (_, { fetchMoreResult }) => {
        return fetchMoreResult;
      },
    });
    setpageNo(page);
  };

  const submitHandler = async () => {
    if (select === "People") {
      await searchUsers({
        variables: {
          search: search,
          skills: [],
          pageNo: pageNo,
        },
      });
    }
    if (select === "Skills") {
      await searchUsers({
        variables: {
          skills: search.split(" "),
          pageNo: pageNo,
        },
      });
    }
  };
  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      submitHandler();
    }
  };
  return (
    <Page>
      <div className={classes.Container}>
        <div className={classes.InputContainer}>
          <p>Note: If searching through skills put " " in between</p>

          <select
            className={classes.options}
            onChange={changeSearchCriteria}
            value={select}
          >
            <option>People</option>
            <option>Skills</option>
          </select>
          <input
            className={classes.input}
            onChange={handleChange}
            value={search}
            placeholder={"Enter"}
            onKeyUp={onKeyUp}
          />
          <button onClick={submitHandler} className={classes.submitBtn}>
            Submit
          </button>
        </div>
        <div>
          <InfiniteScroll
            className={classes.infiteWrapper}
            dataLength={result.length}
            hasMore={hasMore}
            next={fetchMoredata}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>No More Data</b>
              </p>
            }
          >
            {result.map((element, index) => (
              <div className={classes.searchComponent}>
                <ProfileCard key={index} userData={element} />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </Page>
  );
};
export default Search;
