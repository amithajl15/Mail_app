var mongoose = require("mongoose");
var maildet = mongoose.Schema({"msg_id":String ,"Msg_snippet":String,"Msg_data":String,"Msg_From":String,"Msg_To":String,
}
);
module.exports = mongoose.model("mails", maildet);
