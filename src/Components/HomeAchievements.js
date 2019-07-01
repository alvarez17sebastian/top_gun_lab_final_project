import React,{Component} from 'react';
import AchievementsList from '../containers/AchievementsList';
import AppRouter from '../Router';

class HomeAchievements extends Component{ 
    
  render (){
    return (
      <div>
         <AppRouter/>
         <AchievementsList/>
      </div>    
  )}
}
  export default HomeAchievements;


     
  
