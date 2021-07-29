import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Elves Sousa</Text>
          <Text color="gray.300" fontSize="small">
            elvessousa@icloud.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Elves Sousa"
        src="https://github.com/elvessousa.png"
      />
    </Flex>
  );
}
