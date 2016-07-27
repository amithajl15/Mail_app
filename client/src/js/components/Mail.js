var React=require('react');
var UpdateModal = require('./UpdateModal');


var Mail = React.createClass({
  getInitialState:function()
  {
    var html = atob(this.props.mail1.Msg_data.replace(/-/g, '+').replace(/_/g, '/'));
            //console.log("Msg_text.."+html);
    return {matter:html,  showModal : false};
  },handleShowModal: function(){
    console.log("show");
    this.setState({showModal : true})
  },
  handleHideModal : function(){
    console.log("hide false");
    this.setState({showModal : false})
  },
  render: function() {
    return (
      <div className="Mail" >
      <div className="row">

    <div className="col-md-12 mailb" >
    <form >
<span className="glyphicon glyphicon-envelope"></span>
    <h5>ID:{this.props.mail1.msg_id}</h5>
      <h4>From:</h4><p>{this.props.mail1.Msg_From}</p>
        <h4>To:</h4><p>{this.props.mail1.Msg_To}</p>
  <h4>Snippet:</h4><p>{this.props.mail1.Msg_snippet}</p>
    <a id="modal-808820" href="#modal-container-808820" onMouseDown={this.handleShowModal} role="button" class="btn" data-toggle="modal">Read more</a>

     {this.state.showModal?<UpdateModal handleHideModal={this.handleHideModal} mdata={this.props.mail1}/>:null}


    </form>
    </div>
    </div>
    </div>
    );
  }
});
module.exports=Mail;
