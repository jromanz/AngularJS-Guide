
describe("Blog Application Test", function(){

	it("should test the main blog page", function(){

		browser.get("http://localhost:8080/chapter10/");
		
		element(by.model("username")).sendKeys("node");
		element(by.model("password")).sendKeys("password");
		element(by.css(".form-button")).click();

		//gets the blog list
		var blogList = element.all(by.repeater('blogPost in blogList'));
		
		//tests the size of the blogList
		expect(blogList.count()).toEqual(1);
		
		browser.get("http://localhost:8080/chapter10/#!/blogPost/5394e59c4f50850000e6b7ea");
		expect(browser.getTitle()).toEqual("AngularJS Blog");
		
		//gets the comment list
		var commentList = element.all(by.repeater('comment in blogEntry.comments'));
		
		//checks the size of the commentList
		expect(commentList.count()).toEqual(0);
		element(by.css(".navbar-brand")).click();
		element(by.id("lo")).click();
		expect(browser.getTitle()).toEqual("AngularJS Blog");

	});
});