/** @format */

import React, { useEffect, useState } from "react";
import Page from "../../HOC/Page";
import classes from "./Profile.module.css";
import Header from "../../Components/Profile Components/Header/Header";
import Skill from "../../Components/Profile Components/Skills/Skill";
import { useParams, useHistory } from "react-router-dom";
import Experience from "../../Components/Profile Components/Experience/Experience";
import Heading from "../../Components/HomePage Components/Headings/Heading";
import Education from "../../Components/Profile Components/Education/Education";
import { useLazyQuery } from "@apollo/client";
import { getUserQuery } from "./apollo/Queries";
import path from "../../Constants/paths";
const Profile = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [userRelation, setUserRelation] = useState({});
  let [getUser, { loading, data, error }] = useLazyQuery(getUserQuery, {
    variables: { userId: 0 },
  });
  let { userId } = useParams();
  useEffect(() => {
    getUser({
      variables: { userId: userId },
    });
  }, []);
  useEffect(() => {
    if (data?.getUser) {
      let tempdata = { ...data?.getUser };
      let { success, message, error, userRelation, data: queryData } = tempdata;
      if (success) {
        setUserData({ ...queryData });
        setUserRelation({ ...userRelation });
      } else {
        alert(error);
        history.push(path.feed);
      }
    }
  }, [data]);
  useEffect(() => {
    console.log("erro", JSON.stringify(error, null, 2));
  }, [error]);
  if (loading) return <div>loading</div>;

  return (
    <Page>
      <div className={classes.Padding}>
      {/*Object.keys(userData).length this ensures that component is rendered only after state is mutated
      * */}
        {Object.keys(userData).length !== 0 &&
          Object.keys(userRelation).length !== 0 && (
            <Header userData={userData} userRelation={userRelation} />
          )}
        {userData?.skills?.length > 0 && (
          <>
            <h1 style={{ marginLeft: "1%" }}>Skills</h1>
            <Skill skills={userData?.skills} />
          </>
        )}
      </div>
    </Page>
  );
};

export default Profile;

{
  /* <div className={classes.ExperienceContainer}>
          <Heading heading={"Experience"} />
          <div className={classes.flex}>
            <Experience
              heading={"Charotar University Of Science And Technology"}
              duration={"May,2020 - June,2021"}
              role={"Software Engineer"}
            />
            <Experience
              heading={"Geeky Ants"}
              duration={"May,2020 - June,2021"}
              role={"Software Engineer"}
            />
            <Experience
              heading={"Geeky Ants"}
              duration={"May,2020 - June,2021"}
              role={"Software Engineer"}
            />
            <Experience
              heading={"Geeky Ants"}
              duration={"May,2020 - June,2021"}
              role={"Software Engineer"}
            />
            <Experience
              heading={"Geeky Ants"}
              duration={"May,2020 - June,2021"}
              role={"Software Engineer"}
            />
          </div>
        </div>
        <div className={classes.ExperienceContainer}>
          <Heading heading={"Education"} />
          <div className={classes.flex}>
            <Education
              name={"Anand Niketan School Of Excellence"}
              type={"SSC"}
              score={"80%"}
              location={"Ahmedabad"}
            />

            <Education
              name={"Charotar University Of Science And Technology"}
              type={"Undergrad"}
              score={"9.8"}
              location={"Anand"}
            />
            <Education
              name={"Charotar University Of Science And Technology"}
              type={"Undergrad"}
              score={"9.8"}
              location={"Anand"}
            />
            <Education
              name={"Charotar University Of Science And Technology"}
              type={"Undergrad"}
              score={"9.8"}
              location={"Anand"}
            />
          </div>
        </div> */
}
