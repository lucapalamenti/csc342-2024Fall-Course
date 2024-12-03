# Using an Ephemeral Docker Container to Delete Files in a Mounted Volume

Sometimes, you may need to perform file operations on your code in your VM on files that you don't have access to, such as fixing permission issues or deleting files created by a Docker container. You can use an ephemeral Docker container to perform file operations as root in a mounted volume. This guide will walk you through the process step by step.

## Prerequisites

- Docker installed on your system

## Running the Ephemeral Docker Container

Open a terminal and use the following command to run an ephemeral Docker container with a terminal. Replace `/var/webfolder` with the local path you want to perform file operations on.

```bash
docker run -it --rm -v /var/webfolder:/csc342 --entrypoint /bin/bash ubuntu
```

This command will run a container and open a Bash shell inside the container as an administrative user.

## Finding the Mounted Volume Path

Once the container terminal is open, navigate to the mounted volume path:

```bash
cd /csc342
```

Use the `ls -lta` command to list the files in the volume. You can also use other commands to identify the files/folders you want to change permissions for or delete.

## Changing File Permissions

Use the `chmod` command to change the permissions of the files you want to modify. For example, to change the permissions of a file named `test.txt` to 777, you would run the following command:

```bash
chmod 777 test.txt
```

You can also change permissions on a folder (and its files) recursively by using the `-R` flag. For example, to change the permissions of a folder named `test` to 777, you would run the following command:

```bash
chmod -R 777 test
```

## Changing File Ownership

Use the `chown` command to change the ownership of the files you want to modify. For example, to change the ownership of a file named `test.txt` to the user `unityid`, you would run the following command:

```bash
chown unityid test.txt
```

You can also change ownership on a folder (and its files) recursively by using the `-R` flag. For example, to change the ownership of a folder named `test` to the user `unityid`, you would run the following command:

```bash
chown -R unityid test
```

If you want to also change group ownership, you can use the `:` character to specify the group. For example, to change the ownership of a file named `test.txt` (you can do this on a folder too, and also do it recursively) to the user `unityid` and the group `kvm`, you would run the following command:

```bash
chown unityid:kvm test.txt
```

## Deleting Files in the Mounted Volume

Use the `rm` command to delete the files you want to remove. For example, to delete a file named `test.txt`, you would run the following command:

```bash
rm test.txt
```

## Exiting the Container

Once you're done deleting files or changing permissions, exit the container by running the `exit` command.


## Important Notes

* The `--rm` flag in the `docker run` command ensures that the container is automatically removed after you exit it.
* Be cautious when deleting files, as the changes are irreversible.
* You should avoid performing other operations, like creating files or using your repository in this container as it may cause further permission issues. Once you are done with the specific operation you wanted to perform, exit the container and continue working on your VM with your regular user.
* This method allows you to perform file operations as the root user. Exercise caution to prevent unintended actions.
