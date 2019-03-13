## WordPress+Nginx+PHP-FPM+percona mysql ,User creation and  shell service Deployment

- Requires Ansible 1.2 or newer
- Expects CentOS/RHEL 7.x host/s

RHEL7 version reflects changes in Red Hat Enterprise Linux and CentOS 7:
1. Network device naming scheme has changed
2. iptables is replaced with firewalld
3. MySQL is replaced with percona-MySQL

These playbooks deploy a simple all-in-one configuration of the popular
WordPress blogging platform and CMS, frontend by the Nginx web server and the
PHP-FPM process manager. To use, copy the `hosts_file` file to `hosts` and
edit the `hosts` inventory file to include the names or URLs of the servers
you want to deploy.

Then run the playbook, like this:

	ansible-playbook -i hosts_file wordpress_site.yml -u root --extra-vars 'ansible_ssh_pass=xxxxxx'

Note: replace 'xxxxxxx' with correct password
The playbooks will configure Percona-Mysql, WordPress, Nginx, and PHP-FPM. When the run
is complete, you can hit access server to begin the WordPress configuration.

### Ideas for Improvement

Here are some ideas for ways that these playbooks could be extended:

- Parameterize the WordPress deployment to handle multi-site configurations.
- Separate the components (PHP-FPM, MySQL, Nginx) onto separate hosts and
handle the configuration appropriately.
- Handle WordPress upgrades automatically.
