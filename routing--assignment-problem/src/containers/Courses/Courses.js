import React, { Component } from 'react';
import Course from '../Course/Course'
import './Courses.css';
import { Link, Route } from 'react-router-dom';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render() {
        console.log(this.props.match.url)
        return (
            <div>


                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return <Link to={this.props.match.url + "/course/" + course.id + "/" + course.title} key={course.id}>
                                <article className="Course" >{course.title}</article></Link>;
                        })
                    }
                </section>
                <Route path={this.props.match.url + "/course/:id/:title"} exact component={Course} />
            </div>
        );
    }
}

export default Courses;