/* eslint comma-dangle: ["error", "never"] */
/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExperience } from '../../actions/action-experiences';
import Comments from './experience-comments';
import Likes from './experience-likes';
import css from '../../styles/experiences/experiences.scss';

class Experience extends Component {
  componentWillMount() {
    const { fetchExperience } = this.props; //eslint-disable-line
    const id = this.props.params.id;

    fetchExperience(id);
  }

  header() {
    const { experience } = this.props;
    const recipeName = experience.recipe.name;
    const recipeImage = experience.experience.image;
    const userName = `${experience.user.first_name} ${experience.user.last_name}`;
    const userImage = experience.user.image;
    const userLocation = experience.user.location;
    
    return (
      <div>
        <div className="recipe-image-header">
          <div className="recipe-image">
            <img src={recipeImage}/>
          </div>
          <div className="recipe-header-text-box card-5">
            <div className="center-text recipe-title">
              {recipeName}
            </div>
            <div className="horizontal-line">
            </div>
            <div className="user-header-image">
              <img src={userImage} alt={userName} />
            </div>
            <div> 
              by {userName}
            </div>
            <div>
              {userLocation}
            </div>
            <div>
            <Likes id={this.props.params.id} />
          </div>
          </div>

        </div>
      </div>
    )
  }

  story() {
    const { experience } = this.props;
    const experienceName = experience.experience.name;
    const story = experience.experience.story;
    const quote = experience.experience.quote;

    return (
      <div>
        <div className="orange-line-top">
        </div>
        <div className="story-name">
          The Story
        </div>
        <div className="orange-line-bottom">
        </div>
        <div className="quote-text">
          "{quote}"
        </div>
        <div className="story-text">
          <p>{story}</p>
        </div>
      </div>
    );
  }

  recipe() {
    const { experience } = this.props;
    const recipeName = experience.recipe.name;
    const recipeImage = experience.experience.image;

    return (
      <div>
        <div className="blue-line-top">
        </div>
        <div className="story-name">
          The Recipe
        </div>
        <div className="blue-line-bottom">
        </div>
        <div className="ingredients">
        {this.generateIngredients()}
        </div>
        {this.generateSteps()}
      </div>
    );
  }

  generateIngredients() {
    const { experience } = this.props;

    return (
      <div>
        <table
          className="mdl-data-table
          mdl-js-data-table
          mdl-shadow--2dp
          table-width-600"
        >
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Ingredient</th>
              <th>Quantity</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            {experience.ingredients.map(ingredient =>
              <tr key={ingredient.id}>
                <td className="mdl-data-table__cell--non-numeric">{ingredient.ingredients}</td>
                <td>{ingredient.quantity}</td>
                <td className="mdl-data-table__cell--non-numeric">{ingredient.unit}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  generateSteps() {
    const { experience } = this.props;

    return (
      <div>
          {experience.steps.map((step, index) =>
            <div key={step.id}>
              <div className="step-number">
                STEP #{index+1}
              </div>
              <div className="step-text">
                {step.steps}
              </div>
            </div>
          )}
      </div>
    );
  }

  render() {
    const { experience } = this.props;

    if (!experience) {
      return (
        <div >
          Loading...
        </div>
      );
    }

    return (
      <div className="experience-page-container">
        {this.header()}
        <br />
        {this.story()}
        <br />
        {this.recipe()}
        <br />
        <Comments id={this.props.params.id} />
        <br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { experience: state.experiences.experience };
}

export default connect(mapStateToProps, { fetchExperience })(Experience);
