import { ElementType } from 'react';
import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from '@chakra-ui/react';
import { ActiveLink } from '../ActiveLink';

type NavLinkProps = ChakraLinkProps & {
  icon: ElementType;
  children: string;
  href: string;
  shoudMatchExactHref: boolean;
};

export function NavLink({
  icon,
  children,
  href,
  shoudMatchExactHref = false,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
