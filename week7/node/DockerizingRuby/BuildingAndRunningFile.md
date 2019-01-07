
$ docker build -t rubyexample .
Sending build context to Docker daemon  18.94kB
Error response from daemon: Dockerfile parse error line 4: COPY requires at least two arguments, but only one was provided. Destination could not be determined.
$ docker build -t rubyexample .
Sending build context to Docker daemon  18.94kB
Step 1/3 : FROM ruby:2.5
2.5: Pulling from library/ruby
cd8eada9c7bb: Pull complete
c2677faec825: Pull complete
fcce419a96b1: Pull complete
045b51e26e75: Pull complete
83aa5374cd04: Pull complete
82d6bb395a0a: Pull complete
e5a6eab1b75f: Pull complete
bc17118ffa3c: Pull complete
Digest: sha256:4fe61c638dec4dc1d16935325586166b4a87a3aaa1c5a0a40db39a908eae70c5
Status: Downloaded newer image for ruby:2.5
 ---> 6fc6e4e7a8ee
Step 2/3 : COPY app.rb .
 ---> 417c4e3154e4
Step 3/3 : CMD ["ruby","app.rb"]
 ---> Running in 2e7a5d11b182
Removing intermediate container 2e7a5d11b182
 ---> 59e2f5e359fa
Successfully built 59e2f5e359fa
Successfully tagged rubyexample:latest
$ docker run rubyexample
$ docker build -t rubyexample1 .
Sending build context to Docker daemon  18.94kB
Step 1/4 : FROM ruby:2.5
 ---> 6fc6e4e7a8ee
Step 2/4 : RUN bundle config --global frozen 1
 ---> Running in 149a84e2d448
Removing intermediate container 149a84e2d448
 ---> e9f576392c56
Step 3/4 : COPY app.rb .
 ---> f31384e08579
Step 4/4 : CMD ["ruby","app.rb"]
 ---> Running in 673df6dad23e
Removing intermediate container 673df6dad23e
 ---> 3cf9590632f7
Successfully built 3cf9590632f7
Successfully tagged rubyexample1:latest
$ docker run rubyexample1
Berkadia
