class AppointmentsController < ApplicationController

	def index
		appointments = Appointment.all
		render json: appointments
	end

	def create
		appointment = @current_user.appointments.create!(appointment_params)
		render json: appointment, status: :created
	  end
	
	  def show
		render json: @current_user
	  end

	  def destroy
		appointment = Appointment.find(params[:id])
		appointment.destroy
		head :no_content
	  end 
	
	  private
	def appointment_params
		params.permit(:user_id, :trainer_id, :psychologist_id, :date, :time)
	end 
	
end
