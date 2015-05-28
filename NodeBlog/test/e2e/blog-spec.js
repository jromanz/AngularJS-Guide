describe("Blog Application Test", function(){
    it("should test the main blog page", function(){
        browser.get("http://localhost:6868/#!/");
        
        element(by.model("username")).sendKeys("node");
        element(by.model("password")).sendKeys("password");
        element(by.css('.form-button')).click();
        
        expect(browser.getTitle()).toEqual("AngularJS Blog");
        
        var blogList = element.all(by.repeater('blogPost in blogList'));
        
        expect(blogList.count()).toEqual(2);
        
        browser.get("http://localhost:6868/#!/blogPost/5387bafe185e4e972996adff");
        expect(browser.getTitle()).toEqual("AngularJS Blog");
        
        var commentList = element.all(by.repeater('comment in blogEntry.comments'));
        
        expect(commentList.count()).toEqual(0);
        
        element(by.css('.navbar-brand')).click();
        
        element(by.id('lo')).click();
        
        expect(browser.getTitle()).toEqual("AngularJS Blog");
        
        
    });
});