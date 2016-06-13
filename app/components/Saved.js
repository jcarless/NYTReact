var React = require('react');

// Here we created the home component
var Saved = React.createClass({
    render: function(){
        return(

            // Here we use className instead of class because class is a reserved name in Javascript
            // The converter will take className and call it class.
            <div className="mainContainer">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                    <strong>
                                        <i className="fa fa-list-alt">

                                        </i>  Saved Articles</strong></h1>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    <li className="list-group-item">

                                        <h3>
                                            <span><em>Aliens Invade Paris</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">View Article</button>
									<button className="btn btn-primary">Delete</button>
								</span>
                                        </h3>
                                        <p>Date Published: 03/15/16</p>

                                    </li>

                                    <li className="list-group-item">

                                        <h3>
                                            <span><em>Obama Gives Commencement Speech</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">View Article</button>
									<button className="btn btn-primary">Delete</button>
								</span>
                                        </h3>
                                        <p>Date Published: 03/15/16</p>

                                    </li>

                                    <li className="list-group-item">

                                        <h3>
                                            <span><em>AIDS is Cured!</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">View Article</button>
									<button className="btn btn-primary">Delete</button>
								</span>
                                        </h3>
                                        <p>Date Published: 03/15/16</p>


                                    </li>

                                    <li className="list-group-item">

                                        <h3>
                                            <span><em>Knicks Win Championship</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">View Article</button>
									<button className="btn btn-primary">Delete</button>
								</span>
                                        </h3>
                                        <p>Date Published: 03/15/16</p>

                                    </li>

                                    <li className="list-group-item">

                                        <h3>
                                            <span><em>Mud: The New Superfood?</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">View Article</button>
									<button className="btn btn-primary">Delete</button>
								</span>
                                        </h3>
                                        <p>Date Published: 03/15/16</p>

                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

});

// Exporting the component effectively means we can deploy the component in any other file.
module.exports = Saved;