import React from "react";
import { View, Grid, Sticker } from "yiqilaiui";
import TypeMachine from 'app/components/TypeMachine';
import Application from "app/components/Application";

import PersonalAvatar from './PersonalAvatar';
import PersonalHobbies from './PersonalHobbies';
import PersonalSkills from './PersonalSkills';
import WorkExperience from './WorkExperience';
import ProjectExperience from './ProjectExperience';
import EducationBackground from './EducationBackground';
import ExecutiveSummary from './ExecutiveSummary';

const texts = [[{ string: 'Try it and learn from err ' }, { string: '!= nil', color: '#8C9bA5' }]];

export default (props) => (
  <Application title={props.themeConfig.sitename + " | " + props.themeConfig.slogan} {...props} >
    <View className="bg-auto py-wide">
      <div className="screen-md py-none">
        <h3 className="my-none">
          <TypeMachine texts={texts} speed={50} />
        </h3>
      </div>
    </View>
    <div className="screen-md py-wide">
      <Grid gapping>
        <Grid.Column xs={{ size: 24 }} sm={{ size: 6 }}>
          <PersonalAvatar />
          <PersonalSkills />
          <PersonalHobbies />
        </Grid.Column>
        <Grid.Column xs={{ size: 24 }} sm={{ size: 18 }}>
          <WorkExperience />
          <ProjectExperience />
          <EducationBackground />
          <ExecutiveSummary />
        </Grid.Column>
      </Grid>
    </div>
  </Application>
)