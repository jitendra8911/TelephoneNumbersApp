package jitendra.rest;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import jitendra.businessLogic.TelephoneNumbersComputation;

@Path("/logic")
public class TelephoneNumbersLogic {
	
	@GET
	@Path("/computeTelephoneNumbers/{telephoneNumber}/{page}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public AppResponse computeTelephoneNumbers(@PathParam("telephoneNumber") String telephoneNumber,@PathParam("page") int page )
	{
		AppResponse appRes=new AppResponse();
		System.out.println(telephoneNumber);
		ArrayList<String> telephoneList= TelephoneNumbersComputation.findAllCombinations(telephoneNumber);
		ArrayList<String> pageData=new ArrayList<String>();
		int start=5*(page-1);
		int end=5*page;
		for(int i=start;i<telephoneList.size();i++)
		{
			String temp=telephoneList.get(i);
		   if(temp!=null)
		   {
			   pageData.add(temp);
		   }
		   if(i==end) break;
		}
		appRes.setPayload(pageData);	
		appRes.setMessage(telephoneList.size()+"");
		return appRes;
	}
	
	


}
