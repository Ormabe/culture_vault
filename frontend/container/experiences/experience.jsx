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
          </div>

        </div>
      </div>
    )
  }

  user() {
    const { experience } = this.props;
    if (!experience.user) {
      return null;
    }
    const userName = `${experience.user.first_name} ${experience.user.last_name}`;
    const userImage = experience.user.image;
    const userLocation = experience.user.location;

    return (
      <div>
        <img src={userImage} alt={userName} />
        <h3>{userName}</h3>
        <h5>{userLocation}</h5>
      </div>
    );
  }

  story() {
    const { experience } = this.props;
    const experienceName = experience.experience.name;
    const quote = experience.experience.quote;
    const story = experience.experience.story;

    return (
      <div>
        <h1>{experienceName}</h1>
        <h2>{quote}</h2>
        <p>{story}</p>
      </div>
    );
  }

  recipe() {
    const { experience } = this.props;
    const recipeName = experience.recipe.name;
    const recipeImage = experience.experience.image;

    return (
      <div>
        <h3>{recipeName}</h3>
        <img src={recipeImage} alt={recipeName} />
        <br />
        <strong>INGREDIENTS:</strong>
        {this.generateIngredients()}

        <strong>STEPS:</strong>
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
          mdl-shadow--2dp"
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
        <ul>
          {experience.steps.map(step =>
            <li key={step.id}>{step.steps}</li>
          )}
        </ul>
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
        <Likes id={this.props.params.id} />
        <br />
        <Comments id={this.props.params.id} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { experience: state.experiences.experience };
}

export default connect(mapStateToProps, { fetchExperience })(Experience);
