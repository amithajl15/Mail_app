var React = require('react');


var UpdateModal = React.createClass ({
  getInitialState: function(){

return(
      {
  msg_id:this.props.mdata.msg_id,
  Msg_snippet:this.props.mdata.Msg_snippet,
Msg_data:this.props.mdata.Msg_data,
Msg_From:this.props.mdata.Msg_From,
Msg_To:this.props.mdata.Msg_To,
});
  },
  componentDidMount: function(){
    mdata=JSON.stringify(this.state.mdata);
    // console.log("will "+mdata);

    var html = atob(this.props.mdata.Msg_data.replace(/-/g, '+').replace(/_/g, '/'));
        // console.log("materhtml "+html);
 this.appendPre(html);
  },
  appendPre: function(message)
{
 document.getElementById('matter').innerHTML= message;

},
  handleInsert:function(e){

      e.preventDefault();
console.log("mdata "+this.state.mid);
      $.ajax({
        url:"http://localhost:8080/mails/",
        type:"POST",
        data:this.state,
        datatype:"json",
        success:function(data)
        {

        
        }.bind(this),
        error:function(err){
          console.error(err.toString());
        }.bind(this)

      });


    },


  render: function()
  {
  return(
    <div className="modal fade" id="modal-container-808820" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog" id="modalw">
        <div className="modal-content">
          <div className="modal-header">

            <button type="button" className="close" onClick={this.props.handleHideModal} data-dismiss="modal" aria-hidden="true">
              <span className="glyphicon glyphicon-remove-sign"></span>
            </button>
            Your message

          </div>
          <div className="modal-body">
Matter :

<div id="matter">


</div>



          </div>
          <div className="modal-footer">

            <button type="button" onClick={this.props.handleHideModal} className="btn btn-default"  data-dismiss="modal">
              Close
            </button>
            <button type="button" onClick={this.handleInsert}  className="btn btn-primary">
            Insert
            </button>
          </div>
        </div>

      </div>

    </div>

  );}

});

module.exports = UpdateModal;
