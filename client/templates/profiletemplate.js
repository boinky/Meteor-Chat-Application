Template.profileMod.helpers({
	profiles: function (){
		return Messages.find({}, {sort:{createAt: -1}, limit:0 })
	}
});

Template.profileMod.events({
	"click .btnDelete": function(event){
		Messages.remove(this._id);
		return false;
	}/*,

	"keyup .txtGender": function(event){
		if(event.keyCode==13){
			Messages.insert({
				Lastname: $(".txtLname").val(),
				Firstname: $(".txtFname").val(),
				Middlename: $(".txtMname").val(),
				address: $(".txtAddress").val(), 
				status: $(".txtStatus").val(),
				gender: $(".txtGender").val(),
				bday: $(".txtBD").val(),
				createdAt: new Date()
			});
			$(".txtText").val("");
			$(".txtText").focus();
		}
		return false;
	}*/
});
Template.profileMod.events({
	"click .btnSubmit": function(event){
		Messages.insert({
			Lastname: $(".txtLname").val(),
			Firstname: $(".txtFname").val(),
			Middlename: $(".txtMname").val(),
			address: $(".txtAddress").val(), 
			status: $(".txtStatus").val(),
			gender: $(".txtGender").val(),
			bday: $(".txtBD").val(),
			createdAt: new Date()
		});
	}

});