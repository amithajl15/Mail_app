var React=require('react');
var Home = React.createClass({
  render: function() {
    return (
      <div className="Home">
      <div className="row">
  		<div className="col-md-12">
  			<div className="jumbotron">

  				<h2>
  					Hello, Everyone!!!
  				</h2>
  				<p>
  					This is a free web service to obtain your Messages, all content and images on the site are contributed and maintained by our users.
  				</p>
  				<p>
  					<a className="btn btn-primary btn-large" href="#">Learn more</a>
  				</p>
  			</div>
  		</div>
  	</div>
  	
    </div>
  );
}
});





module.exports=Home;
